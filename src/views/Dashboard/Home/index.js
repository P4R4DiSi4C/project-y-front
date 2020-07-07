// libs
import React from 'react';

// components
import { Box, Heading, Text } from 'grommet';

export default () => {
    return (
        <>
            <Box
                fill="vertical"
                basis="40%"
            >
                <Heading level="3" textAlign="center" margin={{top:"none", bottom:"1rem"}}>
                    Rendez-vous du jour
                </Heading>
                <Box
                    fill
                    overflow={{ vertical: 'auto' }}
                    gap="medium"
                    pad={{bottom:'1rem'}}
                >
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                    <Box
                        fill="horizontal"
                        round="xsmall"
                        border={{ color: 'border', size: 'xsmall' }}
                        flex={false}
                        pad="small"
                        justify="evenly"
                    >
                        <Heading
                            level='4'
                            textAlign="start"
                            margin="none">
                            08:00 - 10:00
                            </Heading>
                        <Text>TITRE RDV</Text>
                        <Text>PERSONNE</Text>
                        <Text>LIEU</Text>
                    </Box>
                </Box>
            </Box>
            <Box
                fill="vertical"
                basis="55%"
            >
                <Heading level="3" textAlign="start" margin={{top:"none", bottom:"1rem"}}>
                    À approuver
                </Heading>
                <Box
                    fill
                    pad={{bottom:'1rem'}}
                    overflow={{ vertical: 'auto' }}
                >
                    <Box
                        fill="horizontal"
                        basis="1/3"
                        border={{color:'border',size:'xsmall'}}
                    >

                    </Box>
                    <Heading level="3" textAlign="start" margin={{vertical:"1rem"}}>
                        Calendrier
                    </Heading>
                    <Box
                        fill="horizontal"
                        basis="1/3"
                        border={{color:'border',size:'xsmall'}}
                    >

                    </Box>
                    <Heading level="3" textAlign="start" margin={{vertical:"1rem"}}>
                        Map
                    </Heading>
                    <Box
                        fill="horizontal"
                        basis="1/3"
                        border={{color:'border',size:'xsmall'}}
                    >

                    </Box>
                </Box>
            </Box>
        </>
    );
};