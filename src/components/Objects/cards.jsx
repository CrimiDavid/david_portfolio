import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardActions, CardContent, CardMedia, Typography, Collapse, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Card styling with playful hover effects and radial gradient background
const CustomCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: 'auto',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: theme.shadows[20],
    },
    background: 'radial-gradient(at center, #dace9a, #379e14)',
    color: theme.palette.secondary.contrastText,
    borderRadius: '15px',
    animation: 'fadeInUp 0.5s ease-out', // Add this line for the fade-in animation
}));

// Button styling with vibrant colors
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
    },
    borderRadius: '10px',
    textTransform: 'none',
}));

const ScrollableTypography = styled(Typography)(({ theme }) => ({
    maxHeight: '60px', // Adjust this value as needed
    overflow: 'auto',
    marginBottom: '1rem',
    color: theme.palette.grey[700],
}));

export default function MediaCard({ id, title, description, image, technology }) {
    const [expandedId, setExpandedId] = useState(null);

    const handleExpandClick = (cardId) => {
        setExpandedId(prevId => (prevId === cardId ? null : cardId));
    };

    const isExpanded = id === expandedId;

    return (
        <CustomCard>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                sx={{ borderRadius: '15px 15px 0 0' }}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 'bold', color: '#fff' }} // Change this to your desired text color
                >
                    {title}
                </Typography>
                <ScrollableTypography variant="body2">
                    {description}
                </ScrollableTypography>
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <Box padding={2} sx={{ borderRadius: '10px' }}>
                        <Typography
                            paragraph
                            sx={{ textAlign: 'left', margin: 0, color: '#fff' }} // Change this to your desired text color
                        >
                            {technology}
                        </Typography>
                    </Box>
                </Collapse>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <ColorButton variant="outlined" size="small" aria-label="share">
                    GitHub
                </ColorButton>
                <ColorButton variant="outlined" size="small" onClick={() => handleExpandClick(id)} aria-label="learn more">
                    {isExpanded ? <><ExpandLessIcon /> Less</> : <><ExpandMoreIcon /> Learn More</>}
                </ColorButton>
            </CardActions>
        </CustomCard>
    );
}
