import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.scss';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99
    }
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem key={meal.id} {...meal} />
    ));
    return (
        <section className={classes['available-meals']}>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <ul>{mealsList}</ul>
                </Card>
            </div>
        </section>
    );
};

export default AvailableMeals;
