

function RowPekerjaan(props:any) {
    return (
      <div className="border-2 border-yellow-200/75 rounded-lg bg-white-800 p-2 my-5">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4 ">{props.instansi}</div>
            <div className="col-span-12 md:col-span-4 ">{props.jobdesk}</div>
            <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
}

export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>
        <RowPekerjaan instansi="IDJICAKE" jobdesk="ADMIN" tahun="2020" />
        <RowPekerjaan instansi="PT MASOEM" jobdesk="KEUANGAN" tahun="2021" />
        <RowPekerjaan instansi="PT DUTA FAMILY" jobdesk="SEKERTARIS" tahun="2022" />
        <RowPekerjaan instansi="PT SINERGI MELON PERSADA" jobdesk="BAGIAN KEUANGAN" tahun="2023" />
        </div>
    );
}
