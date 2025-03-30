import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm} from './slices/carsSlice';
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})
//Bemærk ved at eksportere alle reducerne samlet behøver man ikke importere alle slices men blot den samlede store hvor den skal benyttes
export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };