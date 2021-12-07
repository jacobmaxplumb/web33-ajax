import { useEffect, useState } from "react";
import { getCars } from "../services/cars.service";

const initialCar = { make: '', model: '' }

const Cars = (props) => {
    const [cars, setCars] = useState([]);
    const [car, setCar] = useState(initialCar);

    useEffect(() => {
        getCars().then(res => {
            setCars(res)
        })
    }, []);

    const handleClick = () => {
        console.log(car);
    }

    return (
        <div>
            <h1>Cars</h1>
            <br />
            {cars.map((c, index) => (
                <div key={index}>
                    <div onClick={() => setCar(c)}>{c.make} - {c.model}</div>
                    <div>X</div>
                </div>
            ))}
            <br />
            <div>
                <input value={car.make} placeholder="Make" onChange={(e) => setCar({ ...car, make: e.target.value })} />
                <input value={car.model} placeholder="Model" onChange={(e) => setCar({ ...car, model: e.target.value })} />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}

export default Cars;