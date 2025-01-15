class CategoryRepository {
  private categories = [
    { id: 1, name: "Comédie" },
    { id: 2, name: "Science-Fiction" },
  ];

  async readAll() {
    return this.categories;
  }

  async readById(id: number) {
    return this.categories.find((category) => category.id === id) || null;
  }
}

export default new CategoryRepository();
