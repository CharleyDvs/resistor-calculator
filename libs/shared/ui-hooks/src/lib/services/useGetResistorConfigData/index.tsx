import { useQuery } from '@tanstack/react-query';

import { resistorService } from '@resistor-calculator/service-layer';

export const useGetResistorConfigData = (bands: string) => {
  const { getResistorConfig } = resistorService;

  const result = useQuery({
    queryKey: ['resistorConfig'],
    queryFn: async () => {
      const data = await getResistorConfig(bands);

      return data;
    },
  });

  return result;
};
