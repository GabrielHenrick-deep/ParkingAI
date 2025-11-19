const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = 8080;
const apiUrl = process.env.API_URL || 'your-IP';

// Habilitar CORS
app.use(cors());

// Configurar a conexão com o PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

// Função para verificar a conexão com o banco de dados
const verifyDatabaseConnection = async () => {
    try {
        // Tentando conectar ao banco
        await pool.query('SELECT 1');
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1); // Encerra a aplicação se não houver conexão
    }
};

// Rota para obter produtos
app.get('/produtos', async (req, res) => {
    try {
        const query = 'SELECT * FROM produtos';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar produtos: ', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

// Rota para obter vagas
app.get('/parking_spots', async (req, res) => {
    try {
        const query = 'SELECT * FROM parking_spots';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar vaga: ', err);
        res.status(500).json({ error: 'Erro ao buscar vaga' });
    }
});

// Verificar conexão com o banco antes de iniciar o servidor
verifyDatabaseConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://YOUR-IP:${PORT}`);
    });
});
