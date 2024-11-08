import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Crearadmins() {
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();

    const handleRegistrarAdmin = async (event) => {
        event.preventDefault();

        if (!nombre || !contrasena) {
            alert("Por favor, completa ambos campos.");
            return;
        }

        try {
            const response = await fetch('https://back-papa.vercel.app/v1/signos/registraradmin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, contrasena }),
            });

            const data = await response.json();

            if (data.resultado === "Administrador registrado correctamente") {
                alert("Administrador registrado con éxito");
                setNombre("");
                setContrasena("");
                navigate("/admin"); // Redirige a la vista de admin o a la página que necesites
            } else {
                alert("Error al registrar el administrador: " + data.resultado);
            }
        } catch (error) {
            console.error("Error registrando administrador:", error);
            alert("Hubo un problema al registrar el administrador.");
        }
    };

    return (
        <div className="crear-admins">
            <h1>Registrar Nuevo Administrador</h1>
            <form onSubmit={handleRegistrarAdmin}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresa el nombre"
                    />
                </div>
                <div>
                    <label htmlFor="contrasena">Contraseña:</label>
                    <input
                        type="password"
                        id="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Ingresa la contraseña"
                    />
                </div>
                <button type="submit">Registrar Admin</button>
            </form>
        </div>
    );
}

export default Crearadmins;

