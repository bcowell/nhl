import React from 'react';
import { Anchor, Card } from 'grommet';
import './styles.css';

const Team = ({ team }) => {

    const { name, abbreviation, id } = team;

    return (
        <Card className="team"
            heading={ name }
            link={ 
                <Anchor label='View Stats'
                    href={`/teams/${id}`}
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