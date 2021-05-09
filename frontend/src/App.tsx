import BarChart from "Components/BarChart";
import DataTable from "Components/DataTable";
import DonutChart from "Components/DonutChart";
import Footer from "Components/Footer";
import NavBar from "Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className = "text-center text-secundary">taxa de Sucesso(%)</h5>
            <BarChart/>
          </div>
          <div className="col-sm-6">
            <h5 className = "text-center text-secundary">Todas as vendas</h5>
            <DonutChart/>
          </div>
        </div>

        <div className ="py-3">
          <h2 className = "text-primary">Todas as vendas</h2>

        </div>





        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
