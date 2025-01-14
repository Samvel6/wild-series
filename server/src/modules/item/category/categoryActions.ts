import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: "Catégorie non trouvée" });
  }
};

export default { browse, read };
