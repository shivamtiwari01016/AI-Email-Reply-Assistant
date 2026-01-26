import { useState, useContext } from 'react'
import './App.css'
import axios from 'axios';
import { ColorModeContext } from "./theme";
import { LightMode, DarkMode } from "@mui/icons-material";
import { Container, TextField, Typography, Box, FormControl,IconButton, InputLabel, Select, MenuItem, Button, CircularProgress, Paper, Divider } from '@mui/material';
function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
   const { toggleColorMode, mode } = useContext(ColorModeContext);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try{
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error){
       setError('Failed to generate email reply.Please try again');
       console.error(error);
    } finally{
      setLoading(false)
    }
  };
  return(
    <Container maxWidth="md" sx={{py:5}}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3}}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant='h4' fontWeight={600} gutterBottom>
        Email Reply Generator 
      </Typography>
     <IconButton onClick={toggleColorMode}>
         {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
    </Box>
      <Typography variant='body2' color="text.secondary" sx={{ mb: 3 }}>
          Paste an email below and generate a professional, friendly or casual reply.
      </Typography>
         <TextField
         fullWidth
         multiline
         rows={6}
         variant='outlined'
         label= "Original Email Content"
         value={emailContent || ''}
         onChange={(e) => setEmailContent(e.target.value)}
         sx={{ mb:3 }}/>

         <FormControl fullWidth sx={{ mb:3 }}>
          <InputLabel>Tone (Optional)</InputLabel>
          <Select
          value={tone || ''}
          label={"Tone (Optional)"}
          onChange={(e) => setTone(e.target.value)}>
            <MenuItem value="">None</MenuItem>
            <MenuItem value="professional">Professional</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="friendly">Friendly</MenuItem>
          </Select>
         </FormControl>

         <Button
         variant='contained'
         size='large'
         onClick={handleSubmit}
         disabled={ !emailContent || loading}
         fullWidth>
          {loading ? <CircularProgress size={24}/> : "Generate Reply"}
         </Button>
        

        {error && (
             <Typography color='error' sx={{ mb:2 }}>
                {error}
             </Typography>
        )}

        {generatedReply && (
          <>
          <Divider sx={{ my: 3}}/>
            <Typography variant='h6' gutterBottom>
              Generated Reply:
            </Typography>
            <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            value={generatedReply || ''}
            inputProps={{ readOnly: true}}/>

            <Button 
            variant='outlined'
            sx={{ mt:2 }}
            onClick={ () => navigator.clipboard.writeText(generatedReply)}>
              Copy to Clipboard
              </Button>
          </>
        )}
        </Paper>
    </Container>
  );
}

export default App
    