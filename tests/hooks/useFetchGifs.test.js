import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas sobre el hook useFetchGifs', () => 
{
    test('Debe regresar el estado inicial', () => 
    {
        const {result} = renderHook( () => useFetchGifs('One Punch'))
        const {images, isLoading} = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()

    });    

    test('Debe retornar un array de imagenes y isLoading en false', async () => 
    {
        const {result} = renderHook( () => useFetchGifs('One Punch'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    });
});