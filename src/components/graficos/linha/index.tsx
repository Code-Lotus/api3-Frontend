import Chart from 'react-apexcharts'
import Style from "./linha.module.scss"
import Select from '../../select';

export default function Linha({categoria, nome, valor}: {categoria: Array<string>, nome: string, valor: Array<number>}){
    const dados = {options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: categoria
      }
    },
    series: [{
      name: nome,
      data: valor
    }]
  };
  return (
  <div>
    <div className={Style.card}>
      <Chart options={dados.options} series={dados.series} type="line" width={700} height={220} />
      <Select valores={["Mês", "Ano"]}/>
    </div>
  </div>
  );
}