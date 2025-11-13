import { Router } from "express";
import { getMetrics, metricsContentType } from "./metrics.registry";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    res.set("Content-Type", metricsContentType);
    const metrics = await getMetrics();
    res.end(metrics);
  } catch (err: any) {
    console.error("Metrics error:", err);
    res.status(500).end(err?.message || "Error generating metrics");
  }
});

export default router;
