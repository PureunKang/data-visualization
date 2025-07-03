// 외부 API 응답의 개별 객체 - 향후 필드 추가 가능성 있으므로 interface 사용
// 또한, 배열 형태의 JSON 응답 구조를 interface
interface CovidCountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

// 하지만, 배열 형태의 JSON 응답 구조를 interface로 표현하기 어려워 타입 사용
type CovidApiResponse = CovidCountryData[];
