import { useQuery } from '@tanstack/react-query';

import { resistorService } from '@resistor-calculator/service-layer';

export const useGetResistorTypes = () => {
  const { getResistorTypes } = resistorService;

  const result = useQuery({
    queryKey: ['resistorTypes'],
    queryFn: async () => {
      const { data } = await getResistorTypes();

      return data;
    },
  });

  return result;
};
