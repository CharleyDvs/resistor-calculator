import { useQuery } from '@tanstack/react-query';

import { resistorService } from '@resistor-calculator/service-layer';

export const useGetResistorConfigData = (bandNumber: string) => {
  const { getResistorConfig } = resistorService;

  const result = useQuery({
    queryKey: ['resistorConfig'],
    queryFn: async () => {
      const { data } = await getResistorConfig(bandNumber);

      return data;
    },
  });

  return result;
};
