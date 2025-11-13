#!/usr/bin/env bash

PROMETHEUS_URL="http://localhost:9090"
LOG_FILE="alerts.log"

echo "[$(date --iso-8601=seconds)] Checking Prometheus alerts..." | tee -a "$LOG_FILE"

response=$(curl -s "${PROMETHEUS_URL}/api/v1/alerts")

status=$(echo "$response" | jq -r '.status')
if [[ "$status" != "success" ]]; then
  echo "[$(date --iso-8601=seconds)] Failed to query alerts from Prometheus. Status: $status" | tee -a "$LOG_FILE"
  exit 1
fi`

alerts=$(echo "$response" | jq -c '.data.alerts[]? | select(.state == "firing")')

if [[ -z "$alerts" ]]; then
  echo "[$(date --iso-8601=seconds)] No active alerts." | tee -a "$LOG_FILE"
  exit 0
fi

echo "$alerts" | while read -r alert; do
  name=$(echo "$alert" | jq -r '.labels.alertname')
  severity=$(echo "$alert" | jq -r '.labels.severity // "unknown"')
  summary=$(echo "$alert" | jq -r '.annotations.summary // ""')
  description=$(echo "$alert" | jq -r '.annotations.description // ""')
  startsAt=$(echo "$alert" | jq -r '.startsAt')

  log_entry="[$(date --iso-8601=seconds)] ALERT: name=${name}, severity=${severity}, started=${startsAt}, summary=\"${summary}\", description=\"${description}\""
  echo "$log_entry" | tee -a "$LOG_FILE"

  echo "Dispatching alert '${name}' with severity '${severity}'..." | tee -a "$LOG_FILE"
done
