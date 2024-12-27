import React from 'react'
import { client } from './lib/client'

export default async function fetchData() {
    const data = await client.fetch(`*[_type == 'product']`) 
    return data  
}
