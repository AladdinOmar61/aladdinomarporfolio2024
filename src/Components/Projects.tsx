import ProjectCard from './ProjectCard';
import {
  Box,
  Grid,
  Heading,
} from "grommet";

function Projects() {

  return (
    <Box pad="medium" background="#FF3333">
      <Heading level={1} textAlign="center" alignSelf="center">
        My Projects
      </Heading>
      {/* <Heading level={2} textAlign="center" alignSelf="center">Hover over one to get a brief description!</Heading> */}
      <Box justify="center" direction="row" animation={["fadeIn", "slideDown"]}>
        <Grid columns="medium" gap="large" pad={{ bottom: "large" }} align="center" justify="center" justifyContent="center">
          {/* TODO: get showDesc props to work here */}
          <ProjectCard />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
