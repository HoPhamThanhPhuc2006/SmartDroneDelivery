FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["SmartDroneDelivery.API.csproj", "./"]
RUN dotnet restore "SmartDroneDelivery.API.csproj"
COPY . .
RUN dotnet build "SmartDroneDelivery.API.csproj" -c Release -o /app/build
RUN dotnet publish "SmartDroneDelivery.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 5000
ENTRYPOINT ["dotnet", "SmartDroneDelivery.API.dll"]