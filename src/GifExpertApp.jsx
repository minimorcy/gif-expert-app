import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    //  API_KEY: jMEWMlcs2Noqb7OTJtLpjAfwMuoZOqaD

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => 
    {
        if(!categories.includes(newCategory))
            setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {
                categories.map((category) =>
                    (
                        <GifGrid key={category} category={category} />
                    )
                )
            }
        </>
    )
}
