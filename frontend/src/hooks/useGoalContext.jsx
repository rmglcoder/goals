import { useContext } from 'react';
import { AssetsContext } from '../context/AssetsContext';

export const useAssetContext = () => {
    const context = useContext(AssetsContext);

    if (!context) {
        throw Error('useAssetContext must be used inside an AssetsContextProvider');
    }

    return context;
};
