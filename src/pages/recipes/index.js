import Grid from '@/components/Grid/Grid'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
import React from 'react'

// import fs from 'fs'
// import path from 'path'

function Recipes ({ recipes }) {
  return (
    <DefaultLayout>
      <section>
        <h1>Recipes</h1>
        <Grid>
          {recipes.length &&
            recipes.map((recipe) => (
              <div key={recipe.name}>{recipe.name ?? 'unknown'}</div>
            ))}
        </Grid>
      </section>
    </DefaultLayout>
  )
}

export default Recipes

// export async function getStaticProps () {
//   const recipeDirents = await fs.promises
//     .readdir('./content/recipes', {
//       recursive: false,
//       withFileTypes: true
//     })

//   const recipes = [{
//     name: 'lol'
//   }]
//   for (const recipe of recipeDirents) {
//     const p = path.join('./', recipe.path, recipe.name)
//   }

//   return {
//     props: { recipes }
//   }
// }
