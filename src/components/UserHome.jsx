import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './styles/UserHome.css';

function AdminHome() {
    const [ganadores, setGanadores] = useState([]);
    const navigate = useNavigate();

    // Función para obtener los datos de ganadores del backend
    const fetchGanadores = async () => {
        try {
            const response = await fetch('https://back-papa.vercel.app/v1/signos/ganadores', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({}), // Cuerpo vacío si no se requieren parámetros adicionales
            });
            const data = await response.json();
            setGanadores(data.ganadores || []);
        } catch (error) {
            console.error("Error obteniendo los ganadores:", error);
            alert("Hubo un problema al obtener los ganadores.");
        }
    };

    // Cargar los datos de ganadores al montar el componente
    useEffect(() => {
        fetchGanadores();
    }, []);

    return (
        <div className="admin-home">
            <h1>Vista de Administrador - Ganadores</h1>

            {/* Tabla de Ganadores */}
            <table className="tabla-ganadores">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Cédula</th>
                        <th>Teléfono</th>
                        <th>Código Ganador</th>
                        <th>Premio</th>
                    </tr>
                </thead>
                <tbody>
                    {ganadores.length > 0 ? (
                        ganadores.map((ganador) => (
                            <tr key={ganador._id}>
                                <td>{new Date(ganador.fechaRegistro).toLocaleDateString()}</td>
                                <td>{ganador.nombre}</td>
                                <td>{ganador.cedula}</td>
                                <td>{ganador.telefono}</td>
                                <td>{ganador.codigo}</td>
                                <td>{ganador.premio}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No hay ganadores registrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Botones para añadir admin y registrar premio */}
            <div className="admin-actions">
                <button onClick={() => navigate("/crearusers")}>Añadir Admin</button>
            </div>
        </div>
    );
}

export default AdminHome;