import client from "prom-client";

const register = new client.Registry();

register.setDefaultLabels({
  app: "observability-backend"
});

client.collectDefaultMetrics({ register });

// Custom metrics
export const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.3, 0.5, 1, 2, 5]
});

export const appCpuUsagePercent = new client.Gauge({
  name: "app_cpu_usage_percent",
  help: "Mock CPU usage percentage of backend app (0-100)"
});

export const appMemoryUsageBytes = new client.Gauge({
  name: "app_memory_usage_bytes",
  help: "Memory usage of the app in bytes"
});

register.registerMetric(httpRequestDuration);
register.registerMetric(appCpuUsagePercent);
register.registerMetric(appMemoryUsageBytes);

// periodically update gauges (mock CPU, real memory)
setInterval(() => {
  const mockCpu = 10 + Math.random() * 80; // 10–90
  appCpuUsagePercent.set(mockCpu);

  const memRss = process.memoryUsage().rss;
  appMemoryUsageBytes.set(memRss);
}, 5000);

export async function getMetrics(): Promise<string> {
  return register.metrics();
}

export const metricsContentType = register.contentType;
