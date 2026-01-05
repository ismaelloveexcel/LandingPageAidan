import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAppTileSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/tiles", async (req, res) => {
    const tiles = await storage.getAppTiles();
    res.json(tiles);
  });

  app.get("/api/tiles/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const tile = await storage.getAppTile(id);
    if (!tile) {
      return res.status(404).json({ error: "Tile not found" });
    }
    res.json(tile);
  });

  app.post("/api/tiles", async (req, res) => {
    const result = insertAppTileSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid tile data", details: result.error.format() });
    }
    const tile = await storage.createAppTile(result.data);
    res.status(201).json(tile);
  });

  app.patch("/api/tiles/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const partialSchema = insertAppTileSchema.partial();
    const result = partialSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid update data", details: result.error.format() });
    }
    if (Object.keys(result.data).length === 0) {
      return res.status(400).json({ error: "No valid fields to update" });
    }
    const tile = await storage.updateAppTile(id, result.data);
    if (!tile) {
      return res.status(404).json({ error: "Tile not found" });
    }
    res.json(tile);
  });

  app.delete("/api/tiles/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deleted = await storage.deleteAppTile(id);
    if (!deleted) {
      return res.status(404).json({ error: "Tile not found" });
    }
    res.status(204).send();
  });

  return httpServer;
}
