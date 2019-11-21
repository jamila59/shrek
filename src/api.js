export class Giphy {
  async getGiphy(){
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=eA5QrPG0kgbvymKiUi3pJqKZ0ZY54uIB&q=shrek&rating=G&lang=en`)
     let jsonifiedResponse = await response.json();
     return jsonifiedResponse;
  }
}
