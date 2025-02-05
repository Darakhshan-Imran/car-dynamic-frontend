declare module "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions" {
    import type { IControl } from "mapbox-gl"
  
    class MapboxDirections implements IControl {
      constructor(options?: MapboxDirections.Options)
      onAdd(map: mapboxgl.Map): HTMLElement
      onRemove(map: mapboxgl.Map): void
    }
  
    namespace MapboxDirections {
      interface Options {
        accessToken: string
        unit?: string
        profile?: string
        // Add any other options you use
      }
    }
  
    export = MapboxDirections
  }
  
  