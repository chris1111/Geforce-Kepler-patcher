function analysis_fragment_read_bytes()
{
    if ((TexReadBytes() / ThreadCount()) > 128) {
        report_problem(0.3, "Too many texture reads", "Try reducing number of texture accesses");
    }
}

function analysis_texture_stall()
{
    if (TEXStalledPct() > 25.0) {
        report_problem(0.5, "Texture reads are stalling the program", "Reorder program to perform texture fetches earlier");
    }
}

function analysis_GR_idle()
{
    if (GRIdlePct() > 5.0) {
        report_problem(0.75, "Graphics engine is idle", "Check CPU usage to make sure the GPU is fully utilized");
    }
}
