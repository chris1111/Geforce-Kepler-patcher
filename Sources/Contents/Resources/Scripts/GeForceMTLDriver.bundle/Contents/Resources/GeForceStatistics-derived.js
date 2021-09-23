function SampleToTimeRatio()
{
    return MTLStatSample_nSec / MTLStat_nSec;
}

function SMActiveCycles()
{
    return MTLStatSMActiveCycles;
}

function TEXUtilizationPct()
{
    return Math.round((Math.max(Math.max(Math.max(MTLStatTEXUtilizationPctP1, MTLStatTEXUtilizationPctP2),
                                         Math.max(MTLStatTEXUtilizationPctP3, MTLStatTEXUtilizationPctP4)),
                                Math.max(MTLStatTEXUtilizationPctP5, MTLStatTEXUtilizationPctP6)) * 100) / MTLStatTEXCycles);
}

function VerticesSubmitted()
{
    return MTLStatVerticesSubmitted;
}

function VerticesReused()
{
    return Math.max(0, MTLStatVertices - VerticesSubmitted());
}

function VerticesRendered()
{
    return MTLStatVerticesRendered;
}

function PrimitivesClipped()
{
    return MTLStatPrimitivesClipped;
}

function PrimitivesCulled()
{
    return MTLStatPrimitivesCulled;
}

function PrimitivesRendered()
{
    return MTLStatPrimitivesRendered;
}

function PrimitivesSubmitted()
{
    return MTLStatPrimitivesSubmitted;
}

function PixelsWritten()
{
    return MTLStatPixelsWritten;
}

function PixelsShaded()
{
    return MTLStatPixelsShadedP1 + MTLStatPixelsShadedP2;
}

function PixelsKilled()
{
    return Math.max(0, PixelsShaded() - PixelsWritten());
}

function L1CacheThroughputPct()
{
    return (100 * MTLStatL1SMRequests) / MTLStatL1Cycles;
}

function SMBusyPct()
{
    return Math.min(100, (MTLStatSMBusyCycles / MTLStatSMActiveCycles) * 100);
}

function SMUtilizationPct()
{
    return Math.min(100, (MTLStatSMUtilization / MTLStatSMActiveCycles) * 100);
}

function GRBusyPct()
{
    return Math.min(100, (MTLStatGRBusyCycles / MTLStatGRElapsedCycles) * 100);
}

function GRIdlePct()
{
    return Math.min(100, (MTLStatGRIdleCycles / MTLStatGRElapsedCycles) * 100);
}

function HostElapsedCycles()
{
    return MTLStatHostElapsedCycles;
}

function GpcElapsedCycles()
{
    return MTLStatGpcElapsedCycles;
}

function InstIssuedPerActiveCycle()
{
    return Math.max(MTLStatInstIssuedPerActiveCycleP1, MTLStatInstIssuedPerActiveCycleP2) / MTLStatSMActiveCycles;
}

function InstExecutedPerActiveCycle()
{
    return Math.max(MTLStatInstExecutedPerActiveCycleP1, MTLStatInstExecutedPerActiveCycleP2) / MTLStatSMActiveCycles;
}

function BytesRead()
{
    return MTLStatInstLSUP1 * 16 + MTLStatInstLSUP2 * 12 + MTLStatInstLSUP3 * 8 + MTLStatInstLSUP4 * 4 + MTLStatInstLSUP5 * 2;
}

function TotalBytesRead()
{
    return BytesRead() * WarpCount();
}

function WarpCount()
{
    return (MTLStatWarpCountP1 + MTLStatWarpCountP2);
}

function WarpCountVS()
{
    return (MTLStatWarpCountVSP1 + MTLStatWarpCountVSP2);
}

function WarpCountPS()
{
    return (MTLStatWarpCountFSP1 + MTLStatWarpCountFSP2);
}

function WarpCountCS()
{
    return (MTLStatWarpCountCSP1 + MTLStatWarpCountCSP2);
}

function VertexInvocations()
{
    return MTLStatVSInvocations;
}

function FragmentInvocations()
{
    return MTLStatPSInvocations;
}

function ComputeInvocations()
{
    return WarpCountCS() * 32;
}

function TotalInvocations()
{
    return VertexInvocations() + FragmentInvocations() + ComputeInvocations();
}

function InstructionCountMemory()
{
    return MTLStatInstLSUP1 + MTLStatInstLSUP2 + MTLStatInstLSUP3 + MTLStatInstLSUP4 + MTLStatInstLSUP5;
}

function InstructionCountAtomic()
{
    return MTLStatInstCountAtomic;
}

function InstructionExecutedPerCycle()
{
    return MTLStatInstExecutedPerActiveCycleP1 + MTLStatInstExecutedPerActiveCycleP2;
}

function InstructionIssuedPerCycle()
{
    return MTLStatInstIssuedPerActiveCycleP1 + MTLStatInstIssuedPerActiveCycleP2;
}

function InstructionCountCS()
{
    return MTLStatInstCountCS * 32;
}

function InstructionCountVS()
{
    return MTLStatInstCountVS * 32;
}

function InstructionCountPS()
{
    return MTLStatInstCountFS * 32;
}

function InstructionCount()
{
    return MTLStatInstCount * 32;
}

function ALUUtilizationPct()
{
    var cycles = Math.max(MTLStatALUUtilizationPctP1, MTLStatALUUtilizationPctP2);
    return Math.min(100, (cycles / MTLStatSMActiveCycles) * 100);
}

function SMTEXUtilizationPct()
{
    var SM2TEXUtil = (Math.max(MTLStatSMTEXUtilizationPctP1, MTLStatSMTEXUtilizationPctP2) / MTLStatTEXCycles) * 100;
    return Math.min(100, SM2TEXUtil);
}

function TEXBusyPct()
{
    return ((MTLStatTEXBusyPctP1 + MTLStatTEXBusyPctP2) * 50) / MTLStatTEXCycles;
}

function TEXReadBytes()
{
    return (MTLStatTEXReadBytesP1 + MTLStatTEXReadBytesP2) * 128;
}

function TEXSMUtilizationPct()
{
    return (Math.max(MTLStatTEXSMUtilizationPctP1, MTLStatTEXSMUtilizationPctP2) * 100) / MTLStatTEXCycles;
}

function TEXCacheHitratePct()
{
    var hitrate = (((MTLStatTEXHitratePctP3 + MTLStatTEXHitratePctP4) - (MTLStatTEXHitratePctP2 - MTLStatTEXHitratePctP1)) / (MTLStatTEXHitratePctP3 + MTLStatTEXHitratePctP4)) * 100;

    return Math.min(100, hitrate);
}

function TEXTexelCount()
{
    return MTLStatTEXTexelCountP1 + MTLStatTEXTexelCountP2;
}

function TEXBytesPerTexel()
{
    return TEXReadBytes() / TEXTexelCount();
}

function TEXBytesPerPixel()
{
    return TEXReadBytes() / PixelsShaded();
}

function ROPUtilizationPct()
{
    return Math.min(100, (MTLStatROPBusyCycles / MTLStatROPElapsedCycles) * 100);
}

function CROPUtilizationPct()
{
    var max1 = Math.max(MTLStatCROPUtilizationP1, MTLStatCROPUtilizationP2);
    var max2 = Math.max(MTLStatCROPUtilizationP3,  MTLStatCROPUtilizationP4);

    var max = Math.max(max1, max2);
    return Math.min(100, (max / MTLStatCROPActiveCycles) * 100);
}

function CROPBusyCycles()
{
    return MTLStatCROPBusyCycles;
}

function CROPBusyPct()
{
    return Math.min(100, (MTLStatCROPBusyCycles / MTLStatCROPActiveCycles) * 100);
}

function ZROPUtilizationPct()
{
    var max1 = Math.max(MTLStatZROPUtilizationP1, MTLStatZROPUtilizationP2);
    var max2 = Math.max(MTLStatZROPUtilizationP3, MTLStatZROPUtilizationP4);

    var max = Math.max(max1, max2);
    return Math.min(100, (max / MTLStatZROPActiveCycles) * 100);
}

function ZROPBusyCycles()
{
    return MTLStatZROPBusyCycles;
}

function ZROPBusyPct()
{
    return Math.min(100, (MTLStatZROPBusyCycles / MTLStatZROPActiveCycles) * 100);
}

function PixelsPerVertex()
{
    return PixelsShaded() / VerticesSubmitted();
}

function PixelsPerTriangle()
{
    return PixelsShaded() / PrimitivesSubmitted();
}

function PrimitiveClippedPct()
{
    return (PrimitivesClipped() * 100) / PrimitivesSubmitted();
}

function PrimitiveCulledPct()
{
    return (PrimitivesCulled() * 100) / PrimitivesSubmitted();
}

function PrimitiveRenderedPct()
{
    return (PrimitivesRendered() * 100) / PrimitivesSubmitted();
}

function VerticesReusedPct()
{
    return Math.min(100, (VerticesReused() * 100) / VerticesSubmitted());
}

function VerticesRenderedPct()
{
    return (VerticesRendered() * 100) / VerticesSubmitted();
}

function PixelsKilledPct()
{
    return (PixelsKilled() * 100) / PixelsShaded();
}

function MemoryInstructionsPerWarp()
{
    return InstructionCountMemory() / WarpCount();
}

function VertexInstructionsPerWarp()
{
    return InstructionCountVS() / WarpCount();
}

function FragmentInstructionsPerWarp()
{
    return InstructionCountPS() / WarpCount();
}

function ComputeInstructionsPerWarp()
{
    return InstructionCountCS() / WarpCount();
}

function TotalInstructionsPerWarp()
{
    return InstructionCount() / WarpCount();
}

function MemoryInstructionsPerInvocation()
{
    return InstructionCountMemory() / TotalInvocations();
}

function VertexInstructionsPerInvocation()
{
    return InstructionCountVS() / TotalInvocations();
}

function FragmentInstructionsPerInvocation()
{
    return InstructionCountPS() / TotalInvocations();
}

function ComputeInstructionsPerInvocation()
{
    return InstructionCountCS() / TotalInvocations();
}

function TotalInstructionsPerInvocation()
{
    return InstructionCount() / TotalInvocations();
}

function VertexCost()
{
    return MTLStatVertexCost;
}

function FragmentCost()
{
    return MTLStatFragmentCost;
}
