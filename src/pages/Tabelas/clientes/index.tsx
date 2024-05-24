import { useEffect, useState } from "react"
import { api } from "../../../services/api";
import Style from "../usuarios/usuarios.module.scss";
import Navbar from "../../../components/navbar";
import SidebarAdm from "../../../components/sidebar/adm";

interface ClienteProps {
    cliente_id: number,
    cliente_nome: string,
    cliente_cpfcnpj: string,
    cliente_segmento: string
}

export default function Clientes() {
    const titulos = ["ID", "NOME", "CPF/CNPJ", "SEGMENTO"]
    const [clientes, setClientes] = useState<ClienteProps[]>([]);

    useEffect(() => {
        carregaClientes();
    }, [])

    async function carregaClientes() {
        const response = await api.get("/clientes");
        setClientes(response.data);
    }

    return (
        <>
        <Navbar/>
        <SidebarAdm/>
        <div className={Style.usuariosTableContainer}>
            <table className={Style.usuariosTable}>
            <thead>
                <tr>
                    {titulos.map(titulo => (
                        <th>{titulo}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                    <tr>
                        <td>{cliente.cliente_id}</td>
                        <td>{cliente.cliente_nome}</td>
                        <td>{cliente.cliente_cpfcnpj}</td>
                        <td>{cliente.cliente_segmento}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}