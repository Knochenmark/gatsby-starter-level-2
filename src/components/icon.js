import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Icon = ({ icon, prefix = 'fas' }) => <FontAwesomeIcon icon={[prefix, icon]} size="lg" />;

export default Icon;
