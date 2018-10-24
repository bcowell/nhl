import React from 'react';
import { Anchor, Card } from 'grommet';
import './styles.css';

const Team = ({ team }) => {

    const { name, abbreviation } = team;

    return (
        <Card className="team"
            heading={ name }
            link={ 
                <Anchor label='View Stats'
                    href='#'
                    primary={true}
                    reverse={true} 
                />
            }
            label={ abbreviation }
            contentPad='medium'
            headingStrong={false}
        />
    )
}

export default Team;