FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SmartDroneDelivery.API/SmartDroneDelivery.API.csproj", "SmartDroneDelivery.API/"]
RUN dotnet restore "SmartDroneDelivery.API/SmartDroneDelivery.API.csproj"
COPY . .
WORKDIR "/src/SmartDroneDelivery.API"
RUN dotnet build "SmartDroneDelivery.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SmartDroneDelivery.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SmartDroneDelivery.API.dll"]