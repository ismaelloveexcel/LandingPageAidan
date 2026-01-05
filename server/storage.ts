import { type User, type InsertUser, type AppTile, type InsertAppTile } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAppTiles(): Promise<AppTile[]>;
  getAppTile(id: number): Promise<AppTile | undefined>;
  createAppTile(tile: InsertAppTile): Promise<AppTile>;
  updateAppTile(id: number, tile: Partial<InsertAppTile>): Promise<AppTile | undefined>;
  deleteAppTile(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private tiles: Map<number, AppTile>;
  private nextTileId: number;

  constructor() {
    this.users = new Map();
    this.tiles = new Map();
    this.nextTileId = 1;

    const defaultTiles: InsertAppTile[] = [
      { title: "Midnight Hatch", category: "EXPERIMENT", href: "#" },
      { title: "Before Midnight", category: "WORLD", href: "#" },
      { title: "Monster Lab", category: "PROTOTYPE", href: "#" },
    ];

    defaultTiles.forEach((tile) => {
      const id = this.nextTileId++;
      this.tiles.set(id, { ...tile, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAppTiles(): Promise<AppTile[]> {
    return Array.from(this.tiles.values());
  }

  async getAppTile(id: number): Promise<AppTile | undefined> {
    return this.tiles.get(id);
  }

  async createAppTile(tile: InsertAppTile): Promise<AppTile> {
    const id = this.nextTileId++;
    const newTile: AppTile = { ...tile, id };
    this.tiles.set(id, newTile);
    return newTile;
  }

  async updateAppTile(id: number, updates: Partial<InsertAppTile>): Promise<AppTile | undefined> {
    const existing = this.tiles.get(id);
    if (!existing) return undefined;
    const updated: AppTile = { ...existing, ...updates };
    this.tiles.set(id, updated);
    return updated;
  }

  async deleteAppTile(id: number): Promise<boolean> {
    return this.tiles.delete(id);
  }
}

export const storage = new MemStorage();
