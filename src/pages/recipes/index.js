// import Grid from '@/components/Grid/Grid'
// import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'
// import React from 'react'
// import path from 'path'
// import fs from 'fs'

// function Recipes ({ recipes }) {
//   return (
//     <DefaultLayout>
//       <section>
//         <h1>Recipes</h1>
//         <Grid>
//           {recipes.length &&
//             recipes.map((recipe) => (
//               <div key={recipe.name}>{recipe.name ?? 'unknown'}</div>
//             ))}
//         </Grid>
//       </section>
//     </DefaultLayout>
//   )
// }

// export default Recipes

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
//     // const recipePath = path.join('./', recipe.path, recipe.name)
//     // const recipeContent = fs.readFileSync(recipePath, { encoding: 'utf-8' })

//     console.log(recipeFm)
//   }

//   return {
//     props: { recipes }
//   }
// }
