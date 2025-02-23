const exec = require('child_process').exec;
const getPort = require('get-port'); // Make sure you're importing get-port correctly

async function startServer() {
    try {
        const port = await getPort({ port: 3000 }); // Find an available port starting from 3000
        console.log(`Starting Vite on port ${port}...`);

        // Use npx to run cross-env and pass the dynamically assigned port
        exec(`npx cross-env PORT=${port} vite`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error starting server: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    } catch (error) {
        console.error(`Failed to find an available port: ${error.message}`);
    }
}

startServer();
