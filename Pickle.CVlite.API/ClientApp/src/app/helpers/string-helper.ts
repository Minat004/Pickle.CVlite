export class StringHelper{
  private str: string
  constructor(private arg:string) {
    this.str = arg
  }

  // split with '/' without first separate element
  static splitForArray(urlString: string, separator = '/'): string[] {
    const urlArray = urlString.split('/')
    urlArray.shift()
    return urlArray
  }
}
