import { Container, Typography, Box, Card, CardContent, Avatar, Grid } from "@mui/material";
import myPhoto from "../../assets/photo.jpg";
import { Link } from "@mui/material";
export default function Home() {
  return (
    <Container maxWidth="md">
      {/* Заголовок */}
      <Box textAlign="center" mt={4}>
        <Avatar
          src={myPhoto}
          sx={{ 
            width: 100, 
            height: 100, 
            margin: "0 auto", 
            mb: 2, 
            border: "3px solid white",
            boxShadow: 3
          }}
        />
        <Typography variant="h4">Керімов Мейбі</Typography>
        <Typography color="text.secondary">
          Junior Frontend Developer
        </Typography>
      </Box>

      <Grid container spacing={3} mt={2}>
        {/* Про мене */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Про мене
              </Typography>
              <Typography paragraph>
                Я Junior Frontend Developer з міста Одеса. Маю практичний досвід у створенні SPA на React з використанням Redux Toolkit та Redux-Saga. Створював власні pet-проекти, включно з TODO додатком та SWAPI App, де реалізував роботу з API та асинхронну логіку.
              </Typography>
              <Typography paragraph>
                Мене надихає створювати зручні, сучасні та красиві інтерфейси. Люблю експериментувати з новими бібліотеками та технологіями, удосконалювати навички JavaScript, React та CSS. Прагну працювати в команді та брати участь у реальних проектах, щоб покращувати свій професійний рівень.
              </Typography>
              <Typography paragraph>
                Також маю базові знання HTML5, CSS3, Material-UI та вміння працювати з системою контролю версій Git. Прагну постійно навчатися та розвиватися як Frontend Developer.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        Досвід
      </Typography>
      <Typography paragraph>
        Розробляв pet-проекти, що допомогли мені закріпити знання React, Redux Toolkit та Redux-Saga:
      </Typography>
      <ul>
        <li>
          <strong>TODO App:</strong> створення списку задач з додаванням, редагуванням, видаленням та відміткою виконання; використав Redux-Saga для асинхронних операцій.
        </li>
        <li>
          <strong>SWAPI App:</strong> інтеграція з API Star Wars (SWAPI), реалізація пошуку та фільтрації персонажів, використання Redux для управління станом.
        </li>
        <li>
          <strong>Портфоліо-сайт:</strong> створення власного SPA на React з MUI, навігацією, адаптивним дизайном та сторінками резюме, контактів і проектів.
        </li>
      </ul>
    </CardContent>
  </Card>
</Grid>
        {/* Навички */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Навички</Typography>
              <Typography>
                React, JavaScript, Redux Toolkit, Redux-Saga, HTML, CSS, MUI
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Контакти */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Контакти</Typography>
              <Typography>
              Email: <a href="mailto:kerimovmeybi@gmail.com">kerimovmeybi@gmail.com</a>
              </Typography>
              <Typography>
              Телефон: <a href="tel:+380633170279">+380-63-317-02-79</a>
              </Typography>
              <Typography>
                GitHub:{" "}
                <a href="https://github.com/kerimovmeybi-bit" target="_blank">
                  github.com/kerimovmeybi-bit
                </a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}