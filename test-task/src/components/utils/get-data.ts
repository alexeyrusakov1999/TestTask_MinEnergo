export type ResponseData = 
  | SecondChartData[]
  | FirstChartData[]
  | ChartDescription;

  export interface FirstChartData {
    year: number;
    value: number;
  }

  export interface SecondChartData {
    name: string;
    value: number;
    prev: number;
  }
  
  export interface ChartDescription {
    description: {
      left: string;
      right: string;
    }
  }



export const getData = async (url: string): Promise<ResponseData> => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(e) {
        alert(e);
        return [];
    } 
}




