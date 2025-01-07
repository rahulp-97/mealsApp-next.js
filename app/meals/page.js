import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';
import MealsLoading from '../loading-out';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our community.'
}

async function FetchMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun!
      </p>
      <p className={classes.cta}>
        <Link href='/meals/share'>
          Share your favorite Recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={MealsLoading()}>
        <FetchMeals />
      </Suspense>
    </main>
    </>
  )
}

export default MealsPage;