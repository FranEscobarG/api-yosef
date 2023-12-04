import express from 'express';
import cors from 'cors';

import userRoutes from './src/routes/usuarios.routes.js';
import doctorRoutes from './src/routes/doctor.routes.js';
import antecedentesRoutes from './src/routes/antecedentes.routes.js';
import enfermedadRoutes from './src/routes/enfermedad.routes.js';
import odontologiaRoutes from './src/routes/odontologia.routes.js';
import clinicoRoutes from './src/routes/clinico.routes.js';
import pagoRoutes from './src/routes/pago.routes.js';
import citasRoutes from './src/routes/citas.routes.js';
import correoroutes from './src/routes/enviacorreos.js';

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/users', userRoutes);
app.use('/doctor', doctorRoutes);
app.use('/antecedentes', antecedentesRoutes);
app.use('/enfermedad', enfermedadRoutes);
app.use('/odontologia', odontologiaRoutes);
app.use('/clinico', clinicoRoutes);
app.use('/pago', pagoRoutes);
app.use('/cita', citasRoutes);
app.use('/correo', correoroutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
