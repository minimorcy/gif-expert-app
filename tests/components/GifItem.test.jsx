import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas para el componente <GifItem title url />', () => 
{
    const title = "Deadpool"
    const url = "https://media0.giphy.com/media/3dhlSINU1H0KMHopTJ/giphy.gif?cid=a5b6b05brw23bixg2aqv6r5bn5pa4ls2r8ueovgmu4h3y64e&ep=v1_gifs_search&rid=giphy.gif&ct=g"

    test('Componente sin las propiedades oblitatorias ', () => {
        render(<GifItem title={title} />)
    });
 
    test('Hacer match con el snapshot ', () => {
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    });
    
    test('Debe mostrar la imagen con el RUL y el ALT indicado', () => {
        const {container} = render(<GifItem title={title} url={url} />)
        // screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(url)

        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    });

    test('Debe de mostrar el título en el componente', () => {
        const {container} = render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    });
});