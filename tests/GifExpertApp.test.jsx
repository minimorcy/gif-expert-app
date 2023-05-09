import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExperApp />', () => 
{
    test('Comprobar que el h1 de la aplicación no ha sido cambiado ', () => 
    {
        render(<GifExpertApp />)

        expect(screen.getByRole('heading').textContent).toEqual('GifExpertApp')
    }); 
});