import type { Meta, StoryObj } from "@storybook/react";
import { WithRuler } from "./WithRuler";
import { ThemeToggle } from ".";

const meta = {
  component: WithRuler,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <div className="fixed top-0 right-0">
          <ThemeToggle />
        </div>
      </>
    ),
  ],
} satisfies Meta<typeof WithRuler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <main className="px-16 space-y-4 text-gray-400">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          neque nec justo lacinia, nec accumsan libero tristique. Proin posuere
          lectus vitae libero scelerisque, ac hendrerit libero convallis. Sed
          nec fermentum dolor, sit amet placerat nulla. Vestibulum efficitur vel
          justo ac tincidunt.
        </p>

        <p>
          Quisque ullamcorper ipsum nec bibendum volutpat. Cras varius hendrerit
          aliquam. Duis sit amet posuere justo. In ac lectus sed libero
          facilisis mattis. Nulla facilisi. Curabitur bibendum ex eget purus
          tincidunt dignissim.
        </p>

        <p>
          Suspendisse potenti. Integer quis augue libero. Vivamus varius
          tristique sapien, et tempus dui bibendum id. Sed in arcu euismod,
          bibendum est sed, tempor mi. Fusce aliquam, purus id dapibus ultrices,
          ligula est viverra nulla, ac interdum odio mi sit amet purus.
        </p>

        <p>
          Phasellus nec dolor odio. Sed ac varius nulla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Aenean bibendum, nulla at tristique pulvinar, dolor nulla tincidunt
          purus, id cursus ex quam nec libero.
        </p>
      </main>
    ),
  },
};
