import Card from "../components/card";
import BarChart from "../components/chart/barchart";
import DropdownMenu from "../components/menu/dropdown";

const Home = () => {
  const branches = ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Bali'];

  return (
    <>
      <div className="h-screen flex-1 p-7 " style={{ backgroundColor: 'rgba(173, 216, 230, 0.3)' }}>
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <div className="flex flex-wrap justify-center">
          <Card
            title="Total Karyawan"
            desc="Lorem ."
            icon="https://via.placeholder.com/300"
            
          />
          <Card
            title="Absen Masuk"
            desc="Proin ."
            icon="https://via.placeholder.com/300"
          />
          <Card
            title="Absen Alpa"
            desc="Vestibulum ."
            icon="https://via.placeholder.com/300"
          />
          <Card
            title="Absen Izin Kerja"
            desc="Vestibulum "
            icon="https://via.placeholder.com/300"
          />
        </div>
        <div className="flex ">
          {/* Box dengan rasio 2:1 */}
          <div className="flex flex-grow h-96 shadow-lg m-5 p-3 bg-white rounded-lg">
            <div className="flex-1 m-2 bg-white">
              <div className="w-full h-full">
                <BarChart />
              </div>
            </div>
            <div className="flex-1  m-2 justify-center">
              <div className="flex flex-row items-center space-x-4 p-4">
                <div className="flex-1 ml-1   ">Cabang :</div>
                <div className="flex left-1">
                  <DropdownMenu branches={branches} />
                </div>
              </div>
              <div className="overflow-x-auto p-3">
                <table className="min-w-full mb-4 bg-white border border-gray-200 rounded-lg shadow-md">
                  <thead className="bg-blue-100 border-b">
                    <tr >
                      <th className="py-2 px-4 text-left text-gray-700">Status Kehadiran</th>
                      <th className="py-2 px-4 text-left text-gray-700 text-center">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">Masuk</td>
                      <td className="py-2 px-4 text-center">10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">Alpa</td>
                      <td className="py-2 px-4 text-center">0</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Izin Kerja</td>
                      <td className="py-2 px-4 text-center">5</td>
                    </tr>
                    <tr className="border-b bg-blue-100">
                      <td className="py-2 px-4 font-bold">Total Absensi</td>
                      <td className="py-2 px-4 text-center font-bold">5</td>
                    </tr>
                  </tbody>
                </table>
                {/* <button className="p-3 rounded bg-blue-500  hover:bg-blue-600 focus:outline-none">
                    <h1 className="text-white ">Lihat Selengkapnya</h1>
                </button> */}
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-1/4 h-100 bg-blue-500 m-5">
            {/* Konten tambahan jika diperlukan */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
