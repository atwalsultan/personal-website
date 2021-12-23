import { useEffect } from 'react';

import DegreeList from '../lists/DegreeList';
import CertificationList from '../lists/CertificationList';

const DeveloperCredentials = ({ setCurrentPage, credentialsRef }) => {

    useEffect(() => {
        let unmounted = false;

        // Fetch education and certifications and set state for current when component mounts
        if(!unmounted) {
            setCurrentPage('credentials');
        }

        // Unsubscribe to any background calls when componenet unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage])

    return (
        <div className="site-content">
            <h2 ref={ credentialsRef }>Education</h2>
            <div className="degrees-list">
                <DegreeList />         
            </div>

            <h2>Certifications</h2>
            <div className="certifications-list">
                <CertificationList />
            </div>
        </div>
    )
}

export default DeveloperCredentials
