class Comics {
  public name: string
  public image: string

  constructor(data: { name: string, image: string}) {
    this.name = data.name;
    this.image = data.image;
  }
}

interface IComicsState {
  comics: Comics[]
}

export { IComicsState, Comics }