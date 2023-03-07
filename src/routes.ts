import express from 'express';
import api from './api';
import { PersonPropsT } from './types';

const routes = express.Router();

routes.get('/people', async(req, res) => {
  let cast: PersonPropsT[] = [];
  let page = 1;
  let nextPage = 'https://swapi.dev/api/people/';

  try {    
    while (nextPage) {
      const response = await api.get(`people/?page=${page}`)
      
      nextPage = response.data.next
      
      cast = [ ...cast, ...response.data.results]

      page++;
    }
    
    const castNames = cast.map((person: PersonPropsT) => {
      return person.name
    })

    return res.send({ data: castNames })

  } catch (error) {
    res.send({ error: error })
  }
})

routes.get('/person', async(req, res) => {
  try {
    const { data } = await api.get(`people/?search=${req.query.search}`)

    const castNames = data.results.map((person: PersonPropsT) => {
      return person.name
    })

    return res.send({ data: castNames })
  } catch (error) {
    res.send({ error: error })
  }
})

export default routes