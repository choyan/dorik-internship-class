import axios from "axios";

export async function getQuotes() {
    const { data } = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10');
    return data;
}

export async function getQuote(id) {
    const {data} = await axios.get(`https://cat-fact.herokuapp.com/facts/${id}`);
    return data
}
