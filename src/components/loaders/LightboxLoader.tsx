import styledWithConfig from "../../utils/styledWithConfig";
import { type AlbumId } from "../../utils/photos";
import { HaldiHeapLoader } from "./HaldiHeapLoader";
import { WeddingRingsLoader } from "./WeddingRingsLoader";

const Wrap = styledWithConfig("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

const LoadingText = styledWithConfig("p")`
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

type LightboxLoaderProps = {
  albumId: AlbumId;
  progress: number;
  error?: boolean;
  errorMessage: string;
  loadingMessage: string;
};

export function LightboxLoader({
  albumId,
  progress,
  error,
  errorMessage,
  loadingMessage,
}: LightboxLoaderProps) {
  const indeterminate = !error && progress <= 0;
  const displayProgress = progress > 0 ? progress : 0;

  return (
    <Wrap data-component-id="LightboxLoader">
      {albumId === "haldi" ? (
        <HaldiHeapLoader
          progress={displayProgress}
          indeterminate={indeterminate}
        />
      ) : (
        <WeddingRingsLoader
          progress={displayProgress}
          indeterminate={indeterminate}
        />
      )}
      <LoadingText data-component-id="LightboxLoaderText">
        {error ? errorMessage : loadingMessage}
      </LoadingText>
    </Wrap>
  );
}
